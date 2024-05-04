import * as Switch from '@radix-ui/react-switch';

interface DataEndpointSwitchProps {
    endpointSwitchHandler: (checked: boolean) => void
}

export const DataEndpointSwitch = ({
    endpointSwitchHandler
}: DataEndpointSwitchProps) => {
    return (
        <form className='dataEndpointSwitch'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="Label" htmlFor="endpoint-switch" style={{ paddingRight: 15 }}>
                    GEMINI
                </label>
                <Switch.Root className="SwitchRoot" id="endpoint-switch" onCheckedChange={endpointSwitchHandler}>
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
                <label className="Label" htmlFor="endpoint-switch" style={{ paddingLeft: 15 }}>
                    OUR MODEL
                </label>
            </div>
        </form>
    )
}

