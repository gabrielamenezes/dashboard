import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

// a função onClick recebida por props, vai receber a função do toggleDrower para caso 
interface IListItemLinkProps {
    iconName: string;
    itemLinkText: string;
    to: string;
    onClick: (() => void) | undefined; //função não obrigatória
}

export const ListItemLink: React.FC<IListItemLinkProps> = ({ iconName, itemLinkText, to, onClick }) => {
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end: false});
    const handleClick = () => {
        navigate(to);
        onClick?.();
    }
    return (
        <ListItemButton onClick={handleClick} selected={!!match}>
            <ListItemIcon>
                <Icon>{iconName}</Icon>
            </ListItemIcon>
            <ListItemText primary={itemLinkText} />
        </ListItemButton>

    )
}