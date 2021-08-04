export const Screen = ({ name, value }) => {
    const styles = `screen-${name}`
    return <span className={styles}>{value}</span>
}

export const Button = ({ value, onClick, styles }) => (
    <button className={styles} onClick={onClick}>
        {value}
    </button>
)

export const IconButton = ({ value, onClick, styles }) => (
    <button className={styles} onClick={onClick}>
        <i className="material-icons"> {value} </i>
    </button>
)

export const BottomBar = () => <span className="bottom-bar"></span>

export const Calculator = ({ engine = {} }) => {
    return (
        <div class="calculator">
            <div class="container">
                <div class="screen">
                    <Screen name="primary" value="124, 67 x 43" />
                    <Screen name="secondary" value="2, 915, 640" />
                </div>
                <div class="control">
                    <div class="grid">
                        <Button
                            onClick={engine.clear()}
                            styles="blue-text"
                            value="C"
                        />
                        <Button
                            onClick={engine.delete()}
                            styles="blue-text"
                            value="DEL"
                        />
                        <Button
                            onClick={engine.append('%')}
                            styles="blue-text"
                            value="%"
                        />
                        <Button
                            onClick={engine.append('/')}
                            styles="pink-text"
                            value="/"
                        />
                        <Button onClick={engine.append('7')} value="7" />
                        <Button onClick={engine.append('8')} value="8" />
                        <Button onClick={engine.append('9')} value="9" />
                        <Button
                            onClick={engine.append('*')}
                            styles="pink-text"
                            value="*"
                        />
                        <Button onClick={engine.append('4')} value="4" />
                        <Button onClick={engine.append('5')} value="5" />
                        <Button onClick={engine.append('6')} value="6" />
                        <Button
                            onClick={engine.append('-')}
                            styles="pink-text"
                            value="-"
                        />
                        <Button onClick={engine.append('1')} value="1" />
                        <Button onClick={engine.append('2')} value="2" />
                        <Button onClick={engine.append('3')} value="3" />
                        <Button
                            onClick={engine.append('+')}
                            styles="pink-text"
                            value="+"
                        />
                        <Button
                            onClick={engine.append('0')}
                            styles="extend"
                            value="0"
                        />
                        <Button onClick={engine.append('.')} value="." />
                        <Button
                            onClick={engine.evaluate()}
                            styles="pink-text"
                            value="="
                        />
                    </div>
                    <BottomBar />
                </div>
            </div>
        </div>
    )
}
