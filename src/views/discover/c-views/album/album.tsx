import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, useAppDispatch, AppShallowEqual } from '@/store'
import { changeMessageAction, changeCountAction } from '@/store/modules/counter'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = (props) => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    AppShallowEqual
  )

  const dispatchAction = useAppDispatch()
  const handleMessageFn = () => {
    dispatchAction(changeMessageAction('hello world'))
  }
  const handleCountFn = () => {
    dispatchAction(changeCountAction())
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <h2>当前信息: {message}</h2>
      <button onClick={handleMessageFn}>改变msg</button>
      <button onClick={handleCountFn}>count+1</button>
    </div>
  )
}
export default memo(Album)
