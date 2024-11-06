import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { PreferenceList } from "./preference/PreferenceList";
import { PreferenceCreate } from "./preference/PreferenceCreate";
import { PreferenceEdit } from "./preference/PreferenceEdit";
import { PreferenceShow } from "./preference/PreferenceShow";
import { InterestList } from "./interest/InterestList";
import { InterestCreate } from "./interest/InterestCreate";
import { InterestEdit } from "./interest/InterestEdit";
import { InterestShow } from "./interest/InterestShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { StoryList } from "./story/StoryList";
import { StoryCreate } from "./story/StoryCreate";
import { StoryEdit } from "./story/StoryEdit";
import { StoryShow } from "./story/StoryShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { SocialAccountList } from "./socialAccount/SocialAccountList";
import { SocialAccountCreate } from "./socialAccount/SocialAccountCreate";
import { SocialAccountEdit } from "./socialAccount/SocialAccountEdit";
import { SocialAccountShow } from "./socialAccount/SocialAccountShow";
import { PhotoList } from "./photo/PhotoList";
import { PhotoCreate } from "./photo/PhotoCreate";
import { PhotoEdit } from "./photo/PhotoEdit";
import { PhotoShow } from "./photo/PhotoShow";
import { UserBadgeList } from "./userBadge/UserBadgeList";
import { UserBadgeCreate } from "./userBadge/UserBadgeCreate";
import { UserBadgeEdit } from "./userBadge/UserBadgeEdit";
import { UserBadgeShow } from "./userBadge/UserBadgeShow";
import { StoryViewList } from "./storyView/StoryViewList";
import { StoryViewCreate } from "./storyView/StoryViewCreate";
import { StoryViewEdit } from "./storyView/StoryViewEdit";
import { StoryViewShow } from "./storyView/StoryViewShow";
import { EventParticipantList } from "./eventParticipant/EventParticipantList";
import { EventParticipantCreate } from "./eventParticipant/EventParticipantCreate";
import { EventParticipantEdit } from "./eventParticipant/EventParticipantEdit";
import { EventParticipantShow } from "./eventParticipant/EventParticipantShow";
import { GroupMemberList } from "./groupMember/GroupMemberList";
import { GroupMemberCreate } from "./groupMember/GroupMemberCreate";
import { GroupMemberEdit } from "./groupMember/GroupMemberEdit";
import { GroupMemberShow } from "./groupMember/GroupMemberShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"apprenc-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Preference"
          list={PreferenceList}
          edit={PreferenceEdit}
          create={PreferenceCreate}
          show={PreferenceShow}
        />
        <Resource
          name="Interest"
          list={InterestList}
          edit={InterestEdit}
          create={InterestCreate}
          show={InterestShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Story"
          list={StoryList}
          edit={StoryEdit}
          create={StoryCreate}
          show={StoryShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="SocialAccount"
          list={SocialAccountList}
          edit={SocialAccountEdit}
          create={SocialAccountCreate}
          show={SocialAccountShow}
        />
        <Resource
          name="Photo"
          list={PhotoList}
          edit={PhotoEdit}
          create={PhotoCreate}
          show={PhotoShow}
        />
        <Resource
          name="UserBadge"
          list={UserBadgeList}
          edit={UserBadgeEdit}
          create={UserBadgeCreate}
          show={UserBadgeShow}
        />
        <Resource
          name="StoryView"
          list={StoryViewList}
          edit={StoryViewEdit}
          create={StoryViewCreate}
          show={StoryViewShow}
        />
        <Resource
          name="EventParticipant"
          list={EventParticipantList}
          edit={EventParticipantEdit}
          create={EventParticipantCreate}
          show={EventParticipantShow}
        />
        <Resource
          name="GroupMember"
          list={GroupMemberList}
          edit={GroupMemberEdit}
          create={GroupMemberCreate}
          show={GroupMemberShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
