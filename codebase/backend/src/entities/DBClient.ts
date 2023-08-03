import { PrismaClient } from "@prisma/client";

class	DBClient {
	public primsa: PrismaClient;
	private static instance: DBClient;

	private constructor() {
		this.primsa = new PrismaClient();
	}

	public static getInstance(): DBClient {
		if (!DBClient.instance) {
			DBClient.instance = new DBClient();
		}

		return DBClient.instance;
	}
}

export { DBClient };

