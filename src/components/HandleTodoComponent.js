import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Col, Form, Input, Layout, PageHeader, Row, Tag } from 'antd'

const HandleTodoComponent = (props) => {
  const {
    text, todos, handleSubmit, handleTextChange, removeTodo
  } = props

  return (
    <Layout>
      <Layout.Header style={{background: '#fff'}}>
        <PageHeader title="Todolist" />
      </Layout.Header>
      <Layout.Content style={{minHeight: '92vh'}}>
        <Row>
          <Col span={12}
               offset={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Item label="Tâche">
                <Input placeholder="Saisir une tâche"
                       value={text}
                       onChange={handleTextChange} />
              </Form.Item>
              <Form.Item>
                <Button type="primary"
                        htmlType="submit">Ajouter</Button>
              </Form.Item>
            </Form>

            {todos.map(todo =>
              <Card key={todo.id}>
                <Tag closable
                     onClose={() => removeTodo(todo.id)}>
                  {todo.text}
                </Tag>
              </Card>
            )}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

HandleTodoComponent.propTypes = {
  todos: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

export default HandleTodoComponent
