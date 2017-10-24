import * as React from 'react';
import { ProductService } from './productService';


export interface IAppProps extends React.Props<any> { //properties are immutable
    message?: string;
}


export interface IAppState { //state can change
    isReady: boolean;
    displayData: Array<any>;
}

export class Category {
    CategoryName: string;
    Description: string;
}

export class MyComponent extends React.Component<IAppProps, IAppState>{ //Greeter Component

    productService: ProductService;
    categories: Array<Category>;
   
    constructor(props: IAppProps) { //constructor
        console.log('constructor');
        debugger;
        super(props); //always call super with props
        this.state = { isReady: false, displayData: [] } //set initial state
        this.productService = new ProductService(); //create a service instance
        this.categories = [];
    }

    public componentWillMount(): void { //called before render
        console.log('componentWillMount');
    }

    public render(): React.ReactElement<any> { //render component
        debugger;
        if (!this.state.isReady) {
            console.log('render loading message');
            return <div>Loading...</div>;
        }
        else {
            console.log('render async data');
            return (
                <div>
                    <h2>Northwind Categories</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                        </tr>
                        {this.categories.map(category => {
                            return (<tr key={category.CategoryName}>
                                <td>{category.CategoryName}</td>
                                <td>{category.Description}</td>
                            </tr>);
                        })}
                    </tbody>
                    </table>
                </div>
            );
        }
    }

    public componentDidMount(): void { //called after render
        console.log('componentDidMount');
        var that = this;

        //great time to call a service!
        console.log('calling async service');
        debugger;
        this.productService.getCategories().then(categoryResponse => {

            debugger;
            console.log('async service returned data');
            that.categories = [];

            categoryResponse.value.map(cat => { //process response data
                var category = new Category();
                category.CategoryName = cat.CategoryName;
                category.Description = cat.Description;
                that.categories.push(category);
            })

            debugger;
            console.log('updating component state');
            that.setState({ isReady: true, displayData: that.categories }); //changing state force a re-render
        });

    }

    public componentWillReceiveProps(nextProps: IAppProps): void { //called before properties received
        console.log('componentWillReceiveProps');
    }

    public shouldComponentUpdate(nextProps: IAppProps, nextState: IAppState): boolean { //force an update
        console.log('shouldComponentUpdate');
        return true;
    }

    public componentWillUpdate(nextProps: IAppProps, nextState: IAppState): void { //update pending
        console.log('componentWillUpdate');
    }

    public componentDidUpdate(prevprops: IAppProps, prevState: IAppState): void {  //update complete
        console.log('componentDidUpdate');
    }

    public componentWillUnmount(): void {  //called before unmounting
        console.log('componentWillUnmount');
    }


};

