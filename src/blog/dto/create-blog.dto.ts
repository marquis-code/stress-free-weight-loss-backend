// create-blog.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;
}
