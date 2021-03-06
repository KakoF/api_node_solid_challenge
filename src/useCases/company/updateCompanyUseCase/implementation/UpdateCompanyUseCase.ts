import { IGetCompanyRepository } from "../../../../data/repositories/company/get/IGetCompanyRepository";
import { IUpdateCompanyRepository } from "../../../../data/repositories/company/update/IUpdateCompanyRepository";
import { CompanyRequestDto } from "../../dto/company-request.dto";
import { CompanyResponseDto } from "../../dto/company-response.dto";
import { IUpdateCompanyUseCase } from "../IUpdateCompanyUseCase";

export class UpdateCompanyUseCase implements IUpdateCompanyUseCase {
    private _repository: IUpdateCompanyRepository
    private _getCompanyRepository: IGetCompanyRepository
    constructor(repository: IUpdateCompanyRepository, getCompanyRepository: IGetCompanyRepository) {
        this._repository = repository
        this._getCompanyRepository = getCompanyRepository
    }
    async update(userId: string, id: string, data: CompanyRequestDto): Promise<CompanyResponseDto> {
        var pastCompany = await this._getCompanyRepository.get(id);
        if (pastCompany.user.id != userId)
            throw new Error('Operação não permitida')
        const updateItem = { ...pastCompany, ...data };
        const company = CompanyRequestDto.from(userId, updateItem)
        return CompanyResponseDto.from(await this._repository.update(company))
    }

}