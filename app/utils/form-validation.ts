import type { StandardSchemaV1 } from '@standard-schema/spec'
import type { FormSubmitEvent } from '~/types/form'

export async function validateSchema(
  values: unknown,
  schema?: StandardSchemaV1,
): Promise<FormSubmitEvent<typeof values>> {
  if (!schema) throw new Error('Invalid schema')

  const result = await schema['~standard'].validate(values)

  if (!result.issues) return { data: result.value }

  const errors = result.issues.map((issue) => ({
    name:
      issue.path
        ?.map((item) => (typeof item === 'object' ? item.key : item))
        .join('.') || '',
    message: issue.message,
  }))

  return { errors }
}
