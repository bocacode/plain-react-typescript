export interface FormType {
  age?: number
  fname: string
  lname: string
  height: number
}

export interface FormType1 {
  age?: number
}

export interface FormType2 {
  fname: string
}

export interface FormType3 extends FormType, FormType2, FormType1 {
  different: string
}

