import type { StandardSchemaV1 } from '@standard-schema/spec'
import type { SchemaValidationResult } from '~/types/form'

export async function validateSchema(
  values: any,
  schema?: StandardSchemaV1,
): Promise<SchemaValidationResult<typeof values>> {
  if (!schema) throw new Error('Invalid schema')

  const result = await schema['~standard'].validate(values)

  if (!result.issues) return { result: result.value }

  const errors = result.issues.map((issue) => ({
    name:
      issue.path
        ?.map((item) => (typeof item === 'object' ? item.key : item))
        .join('.') || '',
    message: issue.message,
  }))

  return { errors }
}
