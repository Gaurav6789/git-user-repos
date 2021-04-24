import React, { PureComponent } from 'react'

class Users extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            userData : [],
            limit : 25,
            showUserRepo : false,
            repoData :[],
            search : '',
            // offset:0,
        }
    }

    componentDidMount(){
        fetch(`https://api.github.com/users?per_page${this.state.limit}`,{
            method:'GET',
        })
        .then(response => response.json())
        .then(response => this.setState({userData:response}))
    }

    getUserRepo = (repoUrl) =>{
        this.setState({showUserRepo:!this.state.showUserRepo});
        if(!this.state.showUserRepo){
            fetch(repoUrl,{
                method:'GET',
            })
            .then(response => response.json())
            .then(response => this.setState({repoData : response}))
        }
    }

    render() {
        let userNameFilter = this.state.userData.filter((user)=>{return user.login.indexOf(this.state.search) != -1})
        return (
            <div className='user-page'>
                {/* Git User section */}
                {!this.state.showUserRepo &&
                 <div className='page-heading'>
                     Git Users List : <br/>
                     <input 
                     type="text" 
                     placeholder ='Search User'
                     className='input-search-field'
                     value={this.state.search} 
                     onChange={(e)=>this.setState({search : e.target.value})}
                     />
                 </div>}

                {!this.state.showUserRepo && userNameFilter.map((user) =>
                <div 
                    className="userName" 
                    onClick={() => this.getUserRepo(user.repos_url)}
                    key = {user.id}
                >
                    {user.login[0].toUpperCase() + user.login.substring(1) }
                </div>)}

                {/* Git Repo Section */}
                {this.state.showUserRepo && 
                    <div>
                        <div className='page-heading'>
                            <a className='back-button' href={window.location.href}>Back </a>
                            Repositories :
                        </div> 
                        {this.state.repoData && this.state.repoData.map((repos, index)=>
                            <div className="repoName">
                                {`${index+1}. `+ repos.full_name}
                            </div>
               )}</div>
            }
            </div>
        )
    }
}

export default Users