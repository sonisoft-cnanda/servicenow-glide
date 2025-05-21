"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateTemplate = void 0;
const NativeObject_1 = require("../imports/NativeObject.js");
class DuplicateTemplate {
    canAddTasksToTemplate(taskIds, templateId) {
        return new NativeObject_1.NativeObject();
    }
    createTemplate(template) {
        return "";
    }
    getTemplate(templateId) {
        return new NativeObject_1.NativeObject();
    }
    preview(templateId, taskId) {
        return new NativeObject_1.NativeObject();
    }
    publishTemplate(templateId) {
        return false;
    }
    remediateTask(templateId, taskId) {
        return "";
    }
    remediateTaskRun(taskRunId, triggerId) {
    }
    requestCancellation(templateRunId) {
        return false;
    }
    retireTemplate(templateId) {
        return false;
    }
    runScheduler() {
    }
    runTemplate(templateId) {
        return "";
    }
    unPublishTemplate(templateId) {
        return false;
    }
    updateTemplate(templateId, template) {
        return false;
    }
}
exports.DuplicateTemplate = DuplicateTemplate;
//# sourceMappingURL=DuplicateTemplate.js.map