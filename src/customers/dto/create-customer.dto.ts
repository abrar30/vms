import { MaxLength, IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly phone: string;

  @MaxLength(15)
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @MaxLength(40)
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @MaxLength(50)
  readonly description: string;

  // @IsString()
  // readonly vehicles: string;
}

export class LoginCustomerDto {
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
