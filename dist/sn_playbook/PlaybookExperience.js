"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaybookExperience = void 0;
class PlaybookExperience {
    cancelPlaybook(playbookContext, cancellationReason, playbookExperienceId, force) {
        return {};
    }
    cancelPlaybooksByParentRecord(parentRecord, cancellationReason, scopedName, playbookExperienceId) {
        return {};
    }
    getPlaybooksForParentRecord(parentRecord) {
        return new Array();
    }
    parentRecordContainsPlaybook(parentRecord, scopedName) {
        return false;
    }
    triggerPlaybook(scopedName, parentRecord) {
        return "";
    }
}
exports.PlaybookExperience = PlaybookExperience;
//# sourceMappingURL=PlaybookExperience.js.map