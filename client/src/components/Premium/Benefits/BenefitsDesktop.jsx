import React from 'react'
import '../premium.css'
import { Container, Row, Col } from 'react-bootstrap'
import DoneIcon from '@material-ui/icons/Done'
import { BENEFIT_1, BENEFIT_2, BENEFIT_3, BENEFIT_4, BENEFIT_5, BENEFIT_6 } from './BenefitsStringIds'

const styles = {
    doneIcon: {
        fontSize: 30,
        color: '#259AF3',
    },
}

function BenefitsDesktop() {
    function BenefitsCard(props) {
        return (
            <Col className="pr-5">
                <DoneIcon className="align-middle" style={styles.doneIcon} />
                <p className="d-inline lead align-middle">{props.title}</p>
                <p className="text-secondary lead pt-2">{props.description}</p>
            </Col>
        )
    }
    return (
        <div className="circles-bg">
            <Container>
                <h2 className="display-5 py-5 m-0">What's included</h2>
                <Row className="pb-5 mb-3">
                    <BenefitsCard title={BENEFIT_1.TITLE} description={BENEFIT_1.DESCRIPTION} />
                    <BenefitsCard title={BENEFIT_2.TITLE} description={BENEFIT_2.DESCRIPTION} />
                </Row>
                <Row className="pb-5 mb-3">
                    <BenefitsCard title={BENEFIT_3.TITLE} description={BENEFIT_3.DESCRIPTION} />
                    <BenefitsCard title={BENEFIT_4.TITLE} description={BENEFIT_4.DESCRIPTION} />
                </Row>
                <Row className="pb-5 mb-3">
                    <BenefitsCard title={BENEFIT_5.TITLE} description={BENEFIT_5.DESCRIPTION} />
                    <BenefitsCard title={BENEFIT_6.TITLE} description={BENEFIT_6.DESCRIPTION} />
                </Row>
            </Container>
        </div>
    )
}

export default BenefitsDesktop
export { default as BenefitsDesktop } from './BenefitsDesktop'
