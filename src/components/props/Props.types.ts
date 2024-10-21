export type GreetProps = {
  name: string,
  //When passing down props is optional
  messageCount?: number,
  isLoggedIn: boolean
}

//For sending children props
export type HeadingProps = {
  children: string
}

//To use same prop types every time
export type Name = {
  first: string,
  last: string
}

export type PersonProps = {
  name: Name
}

export type PersonListProps = {
  name : {
    first: string,
    last: string
  }[]
}

export type StatusProps = {
  // status: string
  //we can even specify the string
  status: 'loading' | 'success' | 'error'
}

//To pass React components to another component
export type OscarProps = {
  children: React.ReactNode
};

export type ContainerProps = {
  styles: React.CSSProperties
}

//When no value is being return on click of Button
export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type InputProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement> ) => void
}