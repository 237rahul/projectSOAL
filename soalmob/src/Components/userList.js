import React,{Component} from 'react';
import { ScrollView } from 'react-native';
import UserDetails from './userDetails';


class UserList extends Component {
    state = {users:[]}
    componentWillMount(){
        const data = 
        [
            {
                username:'rahul',
                mobile: '9876545678',
                location:'hyd',
                thumbnail_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzH50FXqyurG-DM2d5WwebR9CJweg_gF_ij1v0mFXSYfgv4Vx"
            },
            {
                username:'jhon',
                mobile: '9876545678',
                location:'ny',
                thumbnail_image:"http://lh6.ggpht.com/-VbtApiMZHv0/VPaN-KFvioI/AAAAAAAAAHI/ZDq3VNl4nQ8/s1600/1438003441.jpg"
            },
            {
                username:'thoms',
                mobile: '9876545678',
                location:'london',
                thumbnail_image:"https://dotbadges.com/wp-content/uploads/fancy_products_uploads/2018/06/04/personal03.jpg"
            },
            {
                username:'nick',
                mobile: '9876545678',
                location:'hyd',
                thumbnail_image:"https://flourishnthrive.files.wordpress.com/2018/07/minon2.jpg?w=1400"
            },
            {
                username:'mike',
                mobile: '9876545678',
                location:'ny',
                thumbnail_image:"https://flourishnthrive.files.wordpress.com/2018/07/minon2.jpg?w=1400"
            },
            {
                username:'freddy',
                mobile: '9876545678',
                location:'london',
                thumbnail_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwqpe6vAQGc4BHMJz8gad1JnB6qqTfE5_C-HZuWOUF8COvgSz"
            },
            {
                username:'rahul',
                mobile: '9876545678',
                location:'hyd',
                thumbnail_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzH50FXqyurG-DM2d5WwebR9CJweg_gF_ij1v0mFXSYfgv4Vx"
            },
            {
                username:'jhon',
                mobile: '9876545678',
                location:'ny',
                thumbnail_image:"http://lh6.ggpht.com/-VbtApiMZHv0/VPaN-KFvioI/AAAAAAAAAHI/ZDq3VNl4nQ8/s1600/1438003441.jpg"
            },
            {
                username:'thoms',
                mobile: '9876545678',
                location:'london',
                thumbnail_image:"https://dotbadges.com/wp-content/uploads/fancy_products_uploads/2018/06/04/personal03.jpg"
            },
            {
                username:'nick',
                mobile: '9876545678',
                location:'hyd',
                thumbnail_image:"https://flourishnthrive.files.wordpress.com/2018/07/minon2.jpg?w=1400"
            },
            {
                username:'mike',
                mobile: '9876545678',
                location:'ny',
                thumbnail_image:"https://flourishnthrive.files.wordpress.com/2018/07/minon2.jpg?w=1400"
            },
            {
                username:'freddy',
                mobile: '9876545678',
                location:'london',
                thumbnail_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwqpe6vAQGc4BHMJz8gad1JnB6qqTfE5_C-HZuWOUF8COvgSz"
            },
            {
                username:'rahul',
                mobile: '9876545678',
                location:'hyd',
                thumbnail_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzH50FXqyurG-DM2d5WwebR9CJweg_gF_ij1v0mFXSYfgv4Vx"
            },
            {
                username:'jhon',
                mobile: '9876545678',
                location:'ny',
                thumbnail_image:"http://lh6.ggpht.com/-VbtApiMZHv0/VPaN-KFvioI/AAAAAAAAAHI/ZDq3VNl4nQ8/s1600/1438003441.jpg"
            },
        ]

        this.setState({users : data});
    }
    renderusers(){
        return this.state.users.map(user =>
                <UserDetails key = {user.username} user = {user} /> 
            );
    }
    render() {
        console.log(this.state);
    
        return (
          <ScrollView>
            {this.renderusers()}
          </ScrollView>
        );
      }
}

export {UserList} ;