import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { currencyFormater } from "../utils"

export default function Item({ name, amount, maxAmount }) {

    const cardColor = []
    if (amount > maxAmount) {
        cardColor.push(".bg-danger", "bg-opacity-10")
    }

    return (
        <Card className={cardColor.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">{currencyFormater.format(amount)}
                        <span className="text-muted fs-6 ms-1">/ {currencyFormater.format(maxAmount)}</span>
                    </div>
                </Card.Title>
                <ProgressBar 
                    className="rounded-pill" 
                    variant={setProgressBar(amount, maxAmount)}
                    min={0}
                    max={maxAmount}
                    now={amount} />
                    <Stack direction="horizontal" gap="2" className="mt-4">
                        <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
                        <Button variant="outline-secondary">Expend ✚</Button>
                    </Stack>
            </Card.Body>
        </Card>
    )
}

const setProgressBar = (amount, max) => {
    const ratio = amount/max
    if ( ratio < 0.5) return "primary"
    if ( ratio < 0.75) return "warning"
    return "danger"
}