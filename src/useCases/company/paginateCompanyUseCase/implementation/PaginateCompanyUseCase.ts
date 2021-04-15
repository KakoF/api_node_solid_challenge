import { IPaginateCompanyRepository } from "../../../../data/repositories/company/paginate/IPaginateCompanyRepository";
import { CompanyResponseDto } from "../../dto/company-response.dto";
import { IPaginateCompanyUseCase } from "../IPaginateCompanyUseCase";

export class PaginateCompanyUseCase implements IPaginateCompanyUseCase {
    private _repository: IPaginateCompanyRepository
    constructor(repository: IPaginateCompanyRepository) {
        this._repository = repository
    }
    async paginate(page: number, offset: number, perPage: number): Promise<any> {
        return await this._repository.paginate(page, offset, perPage);
    }
}