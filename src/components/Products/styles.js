import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'hsl(163, 20%, 95%)', // theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: '2.5em',
  },
  root: {
    flexGrow: 1,
  },
}));
