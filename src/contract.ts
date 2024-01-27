import { ContractTransactionReceipt, ethers } from "ethers";

const CONTRACT_ABI = [
  "function getBudgets() public view returns((uint256, string, uint256, string, uint256, uint256)[])",
  "function createBudget(string memory name_, uint256 amount_, string memory unit_) public returns (uint256)"
];

export interface Campaign {
  id: number;
  name: string;
  amount: number;
  unit: string;
  remainingAmount: number;
}

class Contract {
  public contract: ethers.Contract;
  public browserProvider: ethers.BrowserProvider;

  constructor() {
    this.browserProvider = new ethers.BrowserProvider((window as any).ethereum);
    this.contract = new ethers.Contract("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", CONTRACT_ABI, this.browserProvider);
  }

  public deserializeCampaign(budget: [number, string, number, string, number]): Campaign {
    return {
      id: budget[0],
      name: budget[1],
      amount: budget[2],
      unit: budget[3],
      remainingAmount: budget[4],
    }
  }

  public async getCampaigns(): Promise<Campaign[]> {
    return (await this.contract["getBudgets"]()).map(this.deserializeCampaign);
  }

  public async createCampaign(name: string, amount: number, unit: string): Promise<ContractTransactionReceipt> {
    const signer = await this.browserProvider.getSigner();
    return (await (await this.contract.connect(signer).createBudget(name, amount, unit)).wait()); // TODO: fix type error
  }
}

export const contract = new Contract();
