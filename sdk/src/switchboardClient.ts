import { parsePriceData, PriceData } from '@pythnetwork/client';
import { Connection, PublicKey } from '@solana/web3.js';

export class SwitchboardClient {
	private connection: Connection;

	public constructor(connection: Connection) {
		this.connection = connection;
	}

	public async getPriceData(pricePublicKey: PublicKey): Promise<PriceData> {
		const account = await this.connection.getAccountInfo(pricePublicKey);
		return parsePriceData(account.data);
	}
}
