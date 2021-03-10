import React, { useEffect } from "react"
import 'antd/dist/antd.css'
import { Input, Form, Button } from "antd"
import { connect } from "react-redux"
import { createStopWatch } from "../../store/actionCreator"

export const CreateStopWatch = connect(null, {createStopWatch})(({
    createStopWatch,
    stopwatchs
}) => {

    useEffect(() => {
        const date = Date.now()
        console.log(date)
    })

    const onFinish = (values) => {
        const refValues = {
            ...values,
            startDate: Date.now()
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