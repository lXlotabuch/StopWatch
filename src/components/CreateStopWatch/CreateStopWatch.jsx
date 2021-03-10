import React, { useEffect } from "react"
import 'antd/dist/antd.css'
import { Input, Form, Button } from "antd"
import { connect } from "react-redux"
import { createStopWatch } from "../../store/actionCreator"

const mapStateToProps = (state) => {
 return {
     stop: state.stopwatch.stopwatchs
 }
}

export const CreateStopWatch = connect(mapStateToProps, {createStopWatch})(({
    createStopWatch,
    stop
}) => {

    useEffect(() => {
        console.log(stop)
    })

    const onFinish = (values) => {
        const refValues = {
            ...values,
            startDate: new Date()
        }
        createStopWatch(refValues)
    }

    return (
        <Form
            name="create-stopwatch"
            layout="inline"
            onFinish={onFinish}
        >
            <Form.Item 
                name="stopwatchName" 
                label="Stop Watch"
                rules={[
                    {
                        required: true,
                        message:"Please input stopwatch name"
                    }
                ]}
            >
                <Input type="text"/>
            </Form.Item>
            <Form.Item>
              <Button htmlType='submite'>Create</Button>  
            </Form.Item>
        </Form>
    )
})