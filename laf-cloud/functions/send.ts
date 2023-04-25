import cloud from '@lafjs/cloud'

export async function main(ctx: FunctionContext) {
  const { ChatGPTAPI } = await import('chatgpt')
  const data = ctx.body

  // 这里需要把 api 对象放入 cloud.shared 不然无法追踪上下文
  let api = cloud.shared.get('api')
  if (!api) {
    api = new ChatGPTAPI({ apiKey: cloud.env.CHAT_GPT_API_KEY })
    cloud.shared.set('api', api)
  }

  let res
  // 这里前端如果传过来 parentMessageId 则代表需要追踪上下文
  if (!data.parentMessageId) {
    res = await api.sendMessage(data.message)
  } else {
    res = await api.sendMessage(data.message, { parentMessageId: data.parentMessageId })
  }
  return res
}
