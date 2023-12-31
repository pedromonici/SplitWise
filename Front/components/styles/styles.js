import { StyleSheet } from 'react-native';
import theme from './theme.js';
import typography from './typography.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: theme.md_sys_color_background,
  },
  containerHome: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.md_sys_color_background,
  },
  headerStyle: {
    backgroundColor: theme.md_sys_color_background,
    borderWidth:0,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: theme.md_sys_color_on_background,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    // borderColor: theme.md_sys_color_on_secondary_container,
    flexDirection: 'row',
    marginTop: 20,
    padding: 10,
  },
  inputCreateGroup: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    backgroundColor: theme.md_sys_color_primary,
    borderRadius: 5,
    padding: 15,
  },
  iconContainer: {
    width: 30,
  },
  verticalSpace: {
    height: 16,
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 48,
  },
  membersListHeader: {
    marginTop: 48,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    color: theme.md_sys_color_secondary,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 8,
    color: theme.md_sys_color_secondary,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.md_sys_color_secondary,
  },
  groupList: {
    marginTop: 16,
  },
  groupButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  groupButtonText: {
    color: theme.md_sys_color_on_secondary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createGroupButton: {
    backgroundColor: theme.md_sys_color_tertiary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: "100%",
    marginTop: 10,
  },
  createGroupButtonText: {
    color: theme.md_sys_color_on_tertiary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  membersList: {
    marginTop: 8,
    color: theme.md_sys_color_on_primary_container,
    width: "100%",
  },
  memberNameContainer: {
    justifyContent: "flex-start",
    width: "75%",
    padding: 5,
  },
  memberName: {
      fontSize: 18,
      color: theme.md_sys_color_secondary,
  },
  memberUsername: {
    color: theme.md_sys_color_secondary,
    fontSize: 14,
    justifyContent: "space-around",
  },
  memberPic: {
    marginLeft: 10,
    marginRight: 10,
  },
  removeMember: {
    backgroundColor: theme.md_sys_color_tertiary_container,
    margin: 2,
    width: "99%",
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },  
  memberItem: {
    margin: 2,
    width: "98%",
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.md_sys_color_secondary,
    backgroundColor: theme.md_sys_color_surface_variant,
    borderRadius: 5,
  },
  removeMemberButton: {
    fontSize: 20,
    marginLeft: 8,
  },
  addMemberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addMemberButton: {
    fontSize: 48,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: "Roboto",
    color: theme.md_sys_color_primary,
  },
  groupButtonHome: {
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.md_sys_color_primary,
    borderRadius: 10,
    padding: 15,
  },
  groupExpensesTitle: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    color: theme.md_sys_color_secondary,
  },
  noExpenses: {
    color: theme.md_sys_color_error,
    fontSize: 20,
  },
  totalGroupExpenses: {
    color: theme.md_sys_color_tertiary,
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  expenseDetailButton: {
    backgroundColor: theme.md_sys_color_secondary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: "100%",
    marginTop: 10,
  },
  titleExpense: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "Roboto",
    color: theme.md_sys_color_tertiary,
  },
  fieldExpense: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "Roboto",
    color: theme.md_sys_color_tertiary,
  },
  expenseInfos: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    paddingBottom: 5,
    flexGrow: 1,
  },
  expenseImg: {
    width: "30%",
    justifyContent: "space-around",
    // borderWidth: 1,
    // borderColor: "red"
  },
  expenseDetails: {
    width: "65%",
  },
  expenseSharingDetails: {
    marginTop: 5,
    padding: 5,
  },
  createExpenseContainer: {
    flex: 1,
    flexGrow: 0.5,
    padding: 16,
    backgroundColor: theme.md_sys_color_background,
  },
  expenseMembersContainer : {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: theme.md_sys_color_background,
    // borderWidth: 2,
  },
  searchBarContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    // position: 'absolute',
    width: "100%",
    // height: "100%"
  },
  listItem: {
    backgroundColor: theme.md_sys_color_on_tertiary,
    borderBottomColor: theme.md_sys_color_tertiary,
    borderBottomWidth: 1,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    verticalAlign: "middle",
    // zIndex: -1,
  },
  filteredListContainer: {
    width: "98%",
    // maxHeight: "98%",
    zIndex: 1000,
    overflow: "hidden", 
    marginLeft: 4, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,
    borderColor: theme.md_sys_color_tertiary,
    borderWidth: 1,
    marginTop: -2,
    borderWidth: 1,
  },
  listItemText: {
    color: "white",
    marginLeft: 10, 
    fontSize: 14, 
    lineHeight: 25,
    overflow: 'hidden'
  },
  memberListContainer: {
    flexGrow: 0.96,
    width: "96%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  membersButton: {
    marginTop: 10,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.md_sys_color_primary,
    borderRadius: 5,
    padding: 10,
    color: theme.md_sys_color_on_primary,
  },
  infoContainer: {
    flexDirection: "row", 
    width: "100%",
    justifyContent: "space-between",
  },
  bigProfilePic: {
    borderWidth: 5,
    borderColor: theme.md_sys_color_primary,
    borderRadius: 75,
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  changeProfilePic: {
    position: "absolute", 
    marginLeft: 62, 
    marginTop: 130,
  }
});

export default styles;
