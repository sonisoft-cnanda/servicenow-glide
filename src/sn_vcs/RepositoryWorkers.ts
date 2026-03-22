import { RefreshRepository } from "./RefreshRepository";
import { CommitStashPreview } from "./CommitStashPreview";
import { ImportApplication } from "./ImportApplication";
import { CreateBranch } from "./CreateBranch";
import { CreateTag } from "./CreateTag";
import { GenerateStashPreview } from "./GenerateStashPreview";
import { RegisterRepository } from "./RegisterRepository";
import { ExportApplication } from "./ExportApplication";
import { TestConnection } from "./TestConnection";

export class RepositoryWorkers {
    constructor() {  }
    applyIncomingChanges(): ImportApplication {
        return null as any;
    }
    commitOutgoingChanges(): ExportApplication {
        return null as any;
    }
    commitStashPreview(): CommitStashPreview {
        return null as any;
    }
    createBranch(): CreateBranch {
        return null as any;
    }
    createTag(): CreateTag {
        return null as any;
    }
    generateStashPreview(): GenerateStashPreview {
        return null as any;
    }
    refreshRepository(): RefreshRepository {
        return null as any;
    }
    testConnection(): TestConnection {
        return null as any;
    }
    updateCredentials(): RegisterRepository {
        return null as any;
    }
}
