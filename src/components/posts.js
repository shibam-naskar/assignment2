import { child, get, onValue, ref } from "firebase/database";
import React from "react";
import StartFirebase from "./firebaseconfig";

const db = StartFirebase();

export class JobPosts extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, "Posts")

        onValue(dbRef, (snapshot) => {
            var posts = [];
            snapshot.forEach(childSnapshot => {
                let keyname = childSnapshot.key;
                let val = childSnapshot.val()
                posts.push(val);
            })
            console.log(posts)
            this.setState({ tableData: posts });
        })
    }




    render() {







        return (
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Job Vacancies</h1>

                    

                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">


                        {this.state.tableData.map((item, index) => (
                            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <span class="inline-block text-blue-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </span>

                                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{item.postName}</h1>

                                <p class="text-gray-500 dark:text-gray-300">
                                    {item.postDesc}
                                </p>

                                <a href={item.link} class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
        )
    }
}