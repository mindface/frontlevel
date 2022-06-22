import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { charCountState } from '../recoil/selector'
import { textState } from '../recoil/atom'

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

function CharacterCount() {
  const count = useRecoilValue(charCountState)

  return <>Character Count: {count}</>
}

function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      <br />
      Echo: {text}
    </div>
  )
}
