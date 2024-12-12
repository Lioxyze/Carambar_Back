"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlagueController = void 0;
const common_1 = require("@nestjs/common");
const blague_service_1 = require("./blague.service");
const create_blague_dto_1 = require("./dto/create-blague.dto");
let BlagueController = class BlagueController {
    constructor(blagueService) {
        this.blagueService = blagueService;
    }
    getAllBlague() {
        return this.blagueService.getAllBlague();
    }
    createBlague(dto) {
        return this.blagueService.InsertNewBlague(dto);
    }
    GetBlagueViaId(id) {
        return this.blagueService.GetBlagueViaId(Number(id));
    }
};
exports.BlagueController = BlagueController;
__decorate([
    (0, common_1.Get)('/blague'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlagueController.prototype, "getAllBlague", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blague_dto_1.CreateBlagueDto]),
    __metadata("design:returntype", void 0)
], BlagueController.prototype, "createBlague", null);
__decorate([
    (0, common_1.Get)('/blague/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlagueController.prototype, "GetBlagueViaId", null);
exports.BlagueController = BlagueController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [blague_service_1.BlagueService])
], BlagueController);
//# sourceMappingURL=blague.controller.js.map