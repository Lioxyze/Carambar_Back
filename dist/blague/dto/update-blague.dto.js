"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlagueDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_blague_dto_1 = require("./create-blague.dto");
class UpdateBlagueDto extends (0, mapped_types_1.PartialType)(create_blague_dto_1.CreateBlagueDto) {
}
exports.UpdateBlagueDto = UpdateBlagueDto;
//# sourceMappingURL=update-blague.dto.js.map