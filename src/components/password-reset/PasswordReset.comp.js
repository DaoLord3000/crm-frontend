import React from 'react'
import PropTypes from 'prop-types'
import {Container , Row , Col , Form, Button} from 'react-bootstrap'

export const ResetPassword = ({handleOnChange ,handleOnResetSubmit, email , formSwitcher }) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>    
            <hr/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email'
                        name='email' 
                        value={email}
                        onChange={handleOnChange} 
                        placeholder='Enter Email'
                        required />
                    </Form.Group>
                    <p></p>
                    <Button type='submit'>Reset Password</Button>
                </Form>
                <hr/>

                <Row>
                    <Col>
                        <a href='#!' onClick={() => formSwitcher('login')}>Login Now</a> 
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};