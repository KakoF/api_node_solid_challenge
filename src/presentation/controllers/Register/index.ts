import { RegisterRepository } from "../../../data/repositories/register/implementation/RegisterRepository"
import { Bcrypt } from "../../../providers/implementations/Bcrypt"
import { RegisterUseCase } from "../../../useCases/register/implementation/RegisterUseCase"
import { RegisterController } from "./RegisterController"

const _repository = new RegisterRepository()
const _bcrypt = new Bcrypt()
const _service = new RegisterUseCase(_repository, _bcrypt)

const registerController = new RegisterController(_service)

export { registerController }
