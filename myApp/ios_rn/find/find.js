/**
 * Created by pzl on 16/8/21.
 */
import React,{Component} from  "react";
import findStyles from  "./css/find.css";
import {Button} from "../component/button";

var ReactNative=require("react-native");
var {
    Text,
    View,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity
    } = ReactNative;
export class FindView extends Component{
    constructor (props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={findStyles.findView}>
                <ScrollView>
                    <BannerTop/>
                    <SlideView/>
                    <TodayRecommend/>
                    <CanLikeSpace/>
                    <LimitPriceGood/>
                    <RendSpaceButtonAndContact/>
                </ScrollView>
            </View>
        )
    }
}


class BannerTop extends Component{
    constructor (props){
        super(props);
        this.state={

        }
    }

    changeCity=()=>{
        alert(123);
    };
    getBeforeText=()=>{
        //<Button text="查找场地空间"  btnStyleView={findStyles.changeCity} btnStyleText={findStyles.changeCityText} beforeText={this.getBeforeText()}/>
        return(
            <Image source={require('./img/sz_03.png')}/>
        )
    }
    render(){
        return(
            <View style={findStyles.bannerTop}>
                <Image source={require('./img/h_bn.jpg')} style ={findStyles.bannerTopImage} >
                    <Button text="上海" press={this.changeCity} btnStyleView={findStyles.changeCity} btnStyleText={findStyles.changeCityText}/>
                    <Text style={findStyles.bannerText}> 极具创意的特色场地,实现你的任何奇思妙想 </Text>
                    <View style={findStyles.bannerButtonBig} >
                        <View style={findStyles.bannerButtonBigOne}>
                            <TouchableHighlight style={findStyles.bannerButtonBigTwo} onPress={()=>{alert(234)}}>
                                <Text style={findStyles.bannerButtonBigText}>查找场地空间</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Image>
            </View>
        )
    }
}
class SlideView extends Component{
    constructor (props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        }
    }
    getElement(rowData){
        return (
            <TouchableHighlight onPress={()=>{alert(rowData)}} style={findStyles.slideTouch}>
                <View>
                    <Image style={findStyles.slideImage}></Image>
                    <View style={findStyles.slideTouchCode}>
                        <Text style={findStyles.slideTouchCodeText}>
                            上海
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
            )
    }
    render(){
        return(
            <View style={findStyles.slide}>
                <Text style={findStyles.slideText}>区域精选</Text>
                <ListView dataSource={this.state.dataSource} horizontal={true} style={findStyles.slideListView}
                          renderRow={this.getElement.bind(this)}>
                </ListView>
            </View>
        )
    }
}

class BannerRecommendList extends Component{
    constructor (props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        }
    }
    render (){

    }
}
class TodayRecommend extends Component{
    constructor (props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSource: ds.cloneWithRows(this._getTodayRecommendBanner())
        }
    }
    _getTodayRecommendBanner=()=>{
        var bannerRec=[];
        for(var i=0;i<3;i++){
            bannerRec.push(
                <View style={findStyles.todayRecommendLi} key={i}>
                    <TouchableHighlight>
                        <View>
                            <View style={findStyles.todayRecommendLiBanner}>
                                <Image style={findStyles.todayRecommendLiImg}/>
                                <Text style={findStyles.todayRecommendLiPrice}>$40,000/天</Text>
                                <ScrollView style={findStyles.todayRecommendLiImgCodeList} horizontal={true} >
                                    <Text style={findStyles.todayRecommendLiImgCode}>大型活动</Text>
                                    <Text style={findStyles.todayRecommendLiImgCode}>asdasd</Text>
                                </ScrollView>
                            </View>
                            <View style={findStyles.todayRecommendLiDes}>
                                <Text style={findStyles.todayRecommendLiDesTitle}>K11艺术中心</Text>
                                <ScrollView style={findStyles.todayRecommendLiDesCodeList} horizontal={true}>
                                    <View style={findStyles.todayRecommendLiDesCode}>
                                        <Image/>
                                        <Text>普陀区 | 武宁路</Text>
                                    </View>
                                    <View style={findStyles.todayRecommendLiDesCode}>
                                        <Image/>
                                        <Text>230㎡</Text>
                                    </View>
                                    <View style={findStyles.todayRecommendLiDesCode}>
                                        <Image/>
                                        <Text>250人asdasd</Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={findStyles.RecommendLike}>
                        <Image/>
                    </TouchableHighlight>
                </View>
            )
        }
        return bannerRec;
    };
    // <ListView dataSource={this.state.dataSource}  renderRow={(dataRow)=><View>{dataRow}</View>}>
    //</ListView>
    render(){
        return(
            <View style={findStyles.todayRecommend}>
                <Text style={findStyles.todayRecommendTitle}>今日推荐</Text>
                {this._getTodayRecommendBanner()}
            </View>
        )
    }
}
class CanLikeSpace extends Component{
    constructor (props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={findStyles.likeView}>
                <Text style={findStyles.likeTitle}>可能会喜欢</Text>
                <TouchableOpacity  style={findStyles.likeLi}>
                    <ScrollView  horizontal={true}>
                        <Image  style={findStyles.likeImg}/>
                        <View style={findStyles.likeLiView}>
                            <Text style={findStyles.likeLiTitle}>云SPACE中成智谷大秀场</Text>
                            <Text style={findStyles.likeLiAddress}>徐汇区中山西路4504号</Text>
                            <ScrollView style={findStyles.likeCodeLi} horizontal={true}>
                                <Text style={findStyles.likeCode}>459人</Text>
                                <Text style={findStyles.likeCode}>文化盛典</Text>
                                <Text style={findStyles.likeCode}>大型活动</Text>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </TouchableOpacity>
                <TouchableOpacity  style={findStyles.likeLi}>
                    <ScrollView  horizontal={true}>
                        <Image  style={findStyles.likeImg}/>
                        <View style={findStyles.likeLiView}>
                            <Text style={findStyles.likeLiTitle}>云SPACE中成智谷大秀场</Text>
                            <Text style={findStyles.likeLiAddress}>徐汇区中山西路4504号</Text>
                            <ScrollView style={findStyles.likeCodeLi} horizontal={true}>
                                <Text style={findStyles.likeCode}>459人</Text>
                                <Text style={findStyles.likeCode}>文化盛典</Text>
                                <Text style={findStyles.likeCode}>大型活动</Text>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </TouchableOpacity>
                <TouchableOpacity  style={findStyles.likeLi}>
                    <ScrollView  horizontal={true}>
                        <Image  style={findStyles.likeImg}/>
                        <View style={findStyles.likeLiView}>
                            <Text style={findStyles.likeLiTitle}>云SPACE中成智谷大秀场</Text>
                            <Text style={findStyles.likeLiAddress}>徐汇区中山西路4504号</Text>
                            <ScrollView style={findStyles.likeCodeLi} horizontal={true}>
                                <Text style={findStyles.likeCode}>459人</Text>
                                <Text style={findStyles.likeCode}>文化盛典</Text>
                                <Text style={findStyles.likeCode}>大型活动</Text>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </TouchableOpacity>

            </View>
        )
    }
}
class LimitPriceGood extends Component{
    constructor (props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}

class RendSpaceButtonAndContact extends Component{
    constructor (props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}

