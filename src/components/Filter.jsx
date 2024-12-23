

const Filter = () => {
    const details = [
        {
            id: 1,
            src: "data:image/jpeg;base64,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JlydLHWFzzKRkvHpBm4PHzW78lImfix8PxOemfxYJZIn+LmG1/xeDvVRW9q+Fmbi4s1e29YmGZieZ66rYY56iSRhIJYQ0NNjcXDQL7qbZMlo1M+ijB03jYL99Kan4uuF5jraRuinqJY23voFi2/k1wIHosva2iNRKeR07j557sldy6YrjtVWWFRPJKAbhrj3QeVwBYLHutPmWfH4WDj7nHWI2jUhtCxBZaBNAoisb2CjQKdAp0CaBRMAkAp0CjtgFOoNiaBRrQJoE7YBToFI5UDhNAmgTQJoFEjkJAFTocFPcCx0CyBAWILKAUggICAgICAgICDlBwgICAgICAgIOSUHCAgKNAgKQQEBAQFgCygFIICAgICAgICAgICAgICAgICAgICAgICAgICAgICwBZQCkEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBYAsoBSCAgICAgICAgICAgICAgICAgICAgICAo0iZFKRAQEBAWALKAUggICAgICAgICAgICAgICAgICAgICAgICAsQUgpBAWALKAUggICAgICAgICAgICAgICAgICAgICAgICAo0ObKRwgICwBZQCkEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBYwiJFkkQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEH/9k",
            title: 'Finance'
        },
        {
            id: 2,
            src: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg",
            title: 'Healthy living'

        },
        {
            id: 3,
            src: "https://hranker.com/blog/wp-content/uploads/2021/03/government-of-india.jpg",
            title:  'Government of India',

        },

        {
            id: 4,
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAyVBMVEX////+AAAAM5cAH3kAG3gABHP/mJgYLYGYnr//GRn/dHT/gYH/+fn/09P/v78AGHcAAGvp7PUAHpHe4/CYpMwAG5EAJJMAEnVkbqFDTIgALJIAAHPw8PNJUYvLytg1QIKlp8AAAGYAJY8/R4fg4eidn7t/g6j/pqb/kZH/t7f/b2//DQ0ADXQkMHyztcnz9PbU1N9ZXpT/5eX/YWH/2dkAAIsAAIxpc6YvO4IiLnt2fKilq8sRJn2ho72ssMmOkbEAAF27v9BdZ50k/DpiAAAFAklEQVR4nO2dYVvqNhiGuzWd7uycNe7MFRZAOlrnOasg7pyJnYDw/3/UkrSl1YfrAoZbbX3uDyYpyau5r+RN9EN1HEIIIYQQQgghhBBCCCGkLfz+3aFclYNvrw4e/am+qe7NN4dTDv5w+ODP9U11b77/n528q2+qe0MnCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0g4OTzDzuozOr23a7Of7bCyZcXDf9jK5x8eNHwdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInSGudnO0LDm2rk49ff9qL868YvrVOzr/dj18xPJ1geDrB8HSC4d+8k98wPJ1g+DfvhHuHTujkCXTCHMt1sgU6Qf6gk3/DMU7ayjE5tq3QCcK9g9AJQicInSDMsQjXCfLmnDx/h8PVLXQ5xsmX5295aOQ7HP7j33ca+Q4H/g7IvyltgesEoROEThA6QZhjEa4ThE4QOkHoBKETZB8nf/2yH+cYvq1Ozn7eFwzfVifHQCcInSB0gtAJQicInSB0gtAJQicInSB0gtAJQicInSB0gtAJ0hYn73dQGb2z66dWONlNOfitvCuVTuhkC3SC0AlCJwidIHSC0AlCJwidIHSC0AlCJwidIHSCwDsc6IQQQo4nOamRh7u6p78VJWok6dQ9/a0ot0YCOqGT5jvxNboQuhBZy1bc/FnZFoHnBaKcl3jSt4yU1cTTmEX/Rjg56Xe7Xd8VM13MxINpdbvXUum5iItuzky4Qt2n8zh1VeGg+FT3zR9kkfKYMx3TlsIf2efBtS6mDw1w4vd19Uy66m9dDlW/+HT8ELhysmkpocZFNXeibjafBqadLE19pKX4F6bmi+RSFwslTUsGs+ro1+2kq6tR7iQunTjOtZC9oj5WMirqA5k7GWy6DkwsaR3NVeFkJa2TYeYkvDaCF7IJeyd3ItSpUziZ9Oz6GEjrpKeZDKVdBGO7VtKgdLJaWDN6quLeRu3JwonTUcbJPHPyaGKNCyVNcOI9JOU6uXkM7aTurRMVhqFUdhtNpTRTuVGlk658NIXMto7pPw0KJ46srBOziEolDXBSMM+cSFeudJmGZo53aZr2g5Fjs44r4zheeqWT+aVZQLF+YjrPezZjFE4WqbNxopmEoslO1FCXy7DIJws1Nc+NC8/zkuf5JFJ+5mFq9pbM6mZhzZ2qE70MG+gk3jgxk9vqRGoqTs4iM/eJn1kMTbdOYJ2scmUVJ/ZQaoqTaNTvLpzSSRCaU2ZqnYzH41WamINUp08hJ71eJCv5JAzN5rlMTO752F/b4ZmTk+zb5E6GJqFETcqx0vfKcye66Jt04mTnjq+U0lcVI2kppdkNg2qODeXQDlyXgbO9Mwhj28qdPJqMVO6eJjjZcj+JlXVyIso5TOwhPa2cxZP8kU3KOZfKOpHS/oui3In07Dk+85vsRF/NKk5cLy4+WCq8s8lAf+2tO3epjZY5yVJV4cS1RbF7XreTkc4QOqt6p/qqtlTdibmj9aJVxxy8kb6uzfIDVK3tPTXqbO7246xv7yaVQUePjr0gsENOZrq1Uq6am5g61Wikm6S6//vL4PU7cf38JPF0kWQtjbI/uqlt7hSBdC9G1zLYnKcq72seBWbMZoift0wPb3NWJdJ+iwY4OYTqHwaOoz1OXg46oZMGO5Fenax3/4A1cFori7qnTwghhBBCCCGEEEIIIeRQ/gHketQnd8O7EAAAAABJRU5ErkJggg==",
            title: "(HDFC)",

        },
        {
            id: 5,
            src: "https://egwtgphxxkn.exactdn.com/wp-content/uploads/2022/02/best-career-advice-The-Mason-Group.jpg",
            title: 'Career Advice',

        },
        {
            id: 6,
            src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/u/k/m/small-spos8969-poster-bjp-logo-bhartiya-janta-party-sl-9477-wall-original-imaghs5nxqb3jkpf.jpeg?q=20&crop=false",
            title: "Bharatiya Janta Party",

        },
        {
            id: 7,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoc2W8WzIJzc9cC2EOwOXS9YvX4VLYAIMaNQ&s",
            title: "Indian Army",

        },
    ];

    // Handle the click event (example implementation)
    const handleClick = (id) => {
        console.log(`Space clicked: ${id}`);
    };

    return (
        <div className=" sm:pl-20 mt-1 text-sm">
            <button className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-gray-300 z-0">
                + Create Space
            </button>
            
            <div className="mt-5 space-y-3 sm:space-y-4">
                {details.map((detail) => (
                    <div 
                        key={detail.id} 
                        className="flex items-center cursor-pointer hover:bg-gray-300 p-2 rounded-lg"
                        onClick={() => handleClick(detail.id)}
                    >
                        <img src={detail.src} alt="Detail" className="w-6 h-6 rounded-sm sm:w-8 sm:h-8" />
                        <h1 className="ml-3 text-gray-500 text-xs sm:text-sm">{detail.title}</h1>
                    </div>
                ))}
            </div>
            
            <hr className="mt-5" />

            <div className="mt-5 text-xs sm:text-sm text-gray-400">
                <h1>About . Careers . </h1>
                <h1>Terms . Policies .</h1>
                <h1>Acceptable use</h1>
                <h1>Privacy . Cookies .</h1>
                <h1>Ad Choices .</h1>
            </div>
        </div>
    );
}

export default Filter;
