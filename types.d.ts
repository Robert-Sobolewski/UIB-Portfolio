

export namespace portfolio{

    interface INav{
        nav: string[];
    }
    interface ISlide{
        img: string;
        title: string
        description: string
    }
    interface ICarousel{
        carousel:ISlide[];
    }
    interface ICard{
        icon: string;
        title: string
        description: string
        href: string
        btn_text: string
    }
    interface ICards{
        cards:ICard[]
    }
    interface IService{
        imageUrl: string
        title: string
        description: string
    }
    interface IServices{
        services:IService[]
    }
    interface IContact{
        phone: string
        address: string
        email: string
    }
    interface ISkills{

    }
    interface IAbout{
        name: string
        image: string
        title: string
        description: string
        frontend: ISkills
        backend: ISkills

    }

}