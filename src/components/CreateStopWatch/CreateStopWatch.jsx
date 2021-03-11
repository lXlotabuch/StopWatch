import React from "react"
import 'antd/dist/antd.css'
import { Input, Form, Button } from "antd"
import { connect } from "react-redux"
import { createStopWatch } from "../../store/actionCreator"

export const CreateStopWatch = connect(null, {createStopWatch})(({
    createStopWatch,
}) => {

    const onFinish = (values) => {
        const refValues = {
            ...values,
            timer: 0
        }
        createStopWatch(refValues)
    }

    return (
        <>
        <Form
            name="create-stopwatch"
            layout="inline"
            onFinish={onFinish}
        >
            <Form.Item 
                name="name" 
                label="Stop Watch"
            >
                <Input type="text"/>
            </Form.Item>
            <Form.Item>
              <Button htmlType='submite'>Create</Button>  
            </Form.Item>
        </Form>
        </>
    )
})