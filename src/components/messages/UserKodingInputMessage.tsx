import { Box, Text } from 'ink'
import * as React from 'react'
import { extractTag } from '../../utils/messages'
import { getTheme } from '../../utils/theme'
import { TextBlockParam } from '@anthropic-ai/sdk/resources/index.mjs'

type Props = {
  addMargin: boolean
  param: TextBlockParam
}

export function UserKodingInputMessage({
  param: { text },
  addMargin,
}: Props): React.ReactNode {
  const input = extractTag(text, 'koding-input')
  if (!input) {
    return null
  }
  return (
    <Box flexDirection="column" marginTop={addMargin ? 1 : 0} width="100%">
      <Box>
        <Text color={getTheme().koding}>#</Text>
        <Text color={getTheme().secondaryText}> {input}</Text>
      </Box>
    </Box>
  )
}
