import React from 'react'
import List from './List'

const ListItem = () => {
  return (
    <div>
      {/* <List 
        items={['Sravan', 'Spandana', 'Ushika']}
        onClick={(item) => console.log(item)}
      />
      <List 
        items={[1, 2, 3, 4]}
        onClick={(item) => console.log(item)}
      /> */}
      <List 
        items={[
          {
            id: 1,
            first: 'Sravan',
            last: 'Reddy'
          },
          {
            id: 2,
            first: 'Spandana',
            last: 'Reddy'
          },
          {
            id: 3,
            first: 'Ushika',
            last: 'Reddy'
          }
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  )
}

export default ListItem