import React from 'react'
import classes from './Documents.module.css';

type Props = {}

const Documents = (props: Props) => {
  const files: string[] = ["MyFile", "MyNewFile1", "MyNewFile1", "MyNewFile1", "MyNewFile1", ]
  return (
    <div className={classes.filesContent}>
      <h1>Documents</h1>
      <div className={classes.filesList}>
        {files.map((file, index) => {
          return <div key={index} className={classes.file}>
            {file}
          </div> 
        })}
      </div>
    </div>
  )
}

export default Documents