import { View } from "react-native-web";
import { Box, ButtonNumber } from "./Box";
import { styles } from "./Styles";

export const Calculadora = () => {
    return (
        <View>
            <Box value={'0'} />
            <View style={styles.groupButton}>
                <View style={styles.row}>
                    <ButtonNumber text={' % '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={'CE'} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' C '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={'<-'} colorA={'#e0e0e0'} ColorB={'#eac195'}/>
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={'1/x'} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' x²'} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={'sqr'} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' / '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 7 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' 8 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' 9 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' * '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 4 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' 5 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' 6 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' - '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 1 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' 2 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' 3 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' + '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={'+/-'} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' 0 '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' . '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                    <ButtonNumber text={' = '} colorA={'#e0e0e0'} ColorB={'#eac195'} />
                </View>
            </View>
        </View>
    )
}