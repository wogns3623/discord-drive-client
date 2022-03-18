import React from 'react'

import {
  message,
  Upload,
  UploadProps,
} from 'antd'

import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

const props: Partial<UploadProps> = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}
export function Main(): React.ReactElement {
  // const { isLoading } = useContext(globalContext)
  // TODO: 메인디자인
  return (
    <>
      <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">이곳에 드래그 하세요</p>
          <p className="ant-upload-hint">폴더 업로드도 가능</p>
        </Dragger>
      </div>
    </>
  )
}
