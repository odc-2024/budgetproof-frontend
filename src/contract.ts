import { ContractTransactionReceipt, ethers } from 'ethers';

const CONTRACT_ABI = [
  'function getBudgets() public view returns((uint256, string, uint256, string, uint256, address)[])',
  'function createBudget(string memory name_, uint256 amount_, string memory unit_) public returns (uint256)',
  'function getBudget(uint256 budgetId_) public view returns((uint256, string, uint256, string, uint256, address))',
  'function getAllocations(uint256 budgetId_) public view returns((uint256, uint256, string, address, uint256, string, address)[])',
  'function confirmAllocation(uint256 budgetId_, uint256 allocationId_) public',
];

export interface BudgetAllocation {
  id: bigint;
  state: bigint;
  receiverUsername: string;
  receiverAddress: string;
  amount: bigint;
  volunteerUsername: string;
  volunteerAddress: string;
}

export interface Campaign {
  id: bigint;
  name: string;
  amount: bigint;
  unit: string;
  remainingAmount: bigint;
  contractAddress: string;
}

class Contract {
  public contract: ethers.Contract;
  public browserProvider: ethers.BrowserProvider;

  constructor() {
    this.browserProvider = new ethers.BrowserProvider((window as any).ethereum);
    this.contract = new ethers.Contract(
      '0x3FE3A794cB1b64f24027c967622Dd7E9584064DE',
      CONTRACT_ABI,
      this.browserProvider,
    );
  }

  public deserializeCampaign(
    budget: [bigint, string, bigint, string, bigint, string],
  ): Campaign {
    return {
      id: budget[0],
      name: budget[1],
      amount: budget[2],
      unit: budget[3],
      remainingAmount: budget[4],
      contractAddress: budget[5],
    };
  }

  public deserializeAllocation(
    allocation: [bigint, bigint, string, string, bigint, string, string],
  ): BudgetAllocation {
    return {
      id: allocation[0],
      state: allocation[1],
      receiverUsername: allocation[2],
      receiverAddress: allocation[3],
      amount: allocation[4],
      volunteerUsername: allocation[5],
      volunteerAddress: allocation[6],
    };
  }

  public async getCampaigns(): Promise<Campaign[]> {
    return (await this.contract['getBudgets']()).map(this.deserializeCampaign);
  }

  public async getAllocations(budgetId: number): Promise<BudgetAllocation[]> {
    return (await this.contract['getAllocations'](budgetId)).map(
      this.deserializeAllocation,
    );
  }

  public async getCampaign(campaignId: number): Promise<Campaign> {
    return this.deserializeCampaign(await this.contract['getBudget'](campaignId));
  }

  public async createCampaign(
    name: string,
    amount: number,
    unit: string,
  ): Promise<ContractTransactionReceipt> {
    const signer = await this.browserProvider.getSigner();
    return await (
      await (this.contract.connect(signer) as any).createBudget(name, amount, unit)
    ).wait(); // TODO: fix type error
  }

  public async confirmAllocation(
    campaignId: bigint,
    allocationId: bigint,
  ): Promise<ContractTransactionReceipt> {
    const signer = await this.browserProvider.getSigner();
    return await (
      await (this.contract.connect(signer) as any).confirmAllocation(
        campaignId,
        allocationId,
      )
    ).wait(); // TODO: fix type error
  }
}

export const contract = new Contract();
