import toast from 'react-hot-toast';


export const notifyError = (mesagge) => toast.error(mesagge,{
    duration: 3000,
    position: 'top-center',
});

export const notify = (mesagge) => toast.success(mesagge,{
    duration: 3000,
    position: 'top-center',
});

export const notiPersonalizado = (mesagge) => toast(mesagge,
    {
        duration: 4000,
        position: 'top-center',
        icon: '👋',
    }
)


