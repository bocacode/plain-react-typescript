import { useState,  } from 'react'
import { FormType } from '../types/formTypes'

const Form = () => {
  // const [form, setForm] = useState<FormType | any>({ fname: '', lname: '', height: '' })
  
  //@ts-ignore
  const [form, setForm] = useState<FormType>({ fname: '', lname: ''})

  
  console.log(form)

  return (
    <>
      <form action=''>
        <input type='text' onChange={e => setForm({ ...form, fname: e.target.value })} />
        <br />
        <input type='text' onChange={e => setForm({ ...form, lname: e.target.value })} />
        <br />
        <input type='number' onChange={e => setForm({ ...form, age: Number(e.target.value) })} />
        {form.fname}
        {form.lname}
      </form>
    </>
  )
}

export default Form
