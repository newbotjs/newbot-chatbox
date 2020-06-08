<template>
  <div class="conversation--container" ref="scrollable">
    <div class="conversation-wrap" :class="{ 'is-typing': isAgentTyping }">
      <!--<div v-if="isFetchingList" class="message--loader">
        <spinner></spinner>
      </div>-->
      <div class="messages-wrap" v-for="msg in groupedMessage" :key="msg.date">
        <date-separator :date="msg.date"></date-separator>
        <div
          v-for="(obj, index) in msg.messages"
          :key="index"
          :class="{
            'user-message-wrap': obj.isUser,
            'agent-message-wrap': !obj.isUser,
          }"
        >
          <div
            :class="{
              'user-message': obj.isUser,
              'agent-message': !obj.isUser,
            }"
          >
            <div class="avatar-wrap" v-if="!obj.isUser && obj.agent">
              <Avatar :src="obj.agent.avatar" />
            </div>
            <div class="message-wrap">
              <!-- <Typing v-if="isAgentTyping" />-->
              <slot name="message"></slot>
              <Message
                :text="obj.data.text"
                :date="obj.date"
                :isUser="obj.isUser"
                :agent="obj.agent"
              />
            </div>
          </div>
          <div>
            <component
              :is="obj.component"
              v-if="obj.component"
              :data="obj.data"
              :isLastMessage="index == length - 1"
            />
            <QuickReplies
              :data="obj.data.actions"
              v-if="displayActions(obj.data, index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerfectScrollbar from "perfect-scrollbar";
import Message from "./Message.vue";
import InputMessage from "./InputMessage";
import ImageCard from "./Image.vue";
import VideoCard from "./Video.vue";
import QuickReplies from "./QuickReplies.vue";
import DateSeparator from "../Separator.vue";
import Buttons from "./Buttons.vue";
import Carousel from "./Carousel.vue";
import Typing from "./Typing.vue";
import Avatar from "./Avatar.vue";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  props: ["avatar"],
  components: {
    Message,
    InputMessage,
    ImageCard,
    VideoCard,
    QuickReplies,
    Buttons,
    Carousel,
    DateSeparator,
    Avatar,
    Typing,
  },
  data() {
    return {
      container: null,
      ps: null,
    };
  },
  mounted() {
    this.container = this.$refs["scrollable"];
    this.ps = new PerfectScrollbar(this.container);
    /*this.$bus.$on("send", () => {
      this.scrollToBottom();
    });*/
    this.$bus.$on("reply", (output) => {
      // eslint-disable-next-line no-console
      let component = "";
      if (typeof output == "string") {
        output = {
          text: output,
        };
      } else if (output.image) {
        component = "ImageCard";
      } else if (output.video) {
        component = "VideoCard";
      } else if (output.buttons) {
        component = "Buttons";
      } else if (output.cards) {
        component = "Carousel";
      }
      this.$store.commit("addMessage", {
        isUser: false,
        date: new Date(),
        component,
        data: {
          ...output,
        },
      });
      this.scrollToBottom();
    });
  },
  computed: {
    ...mapGetters(["messages", "length"]),
    urlAvatar() {
      if (!this.avatar) return {};
      return {
        "background-image": `url(${this.avatar})`,
      };
    },
    isAgentTyping() {
      return true;
    },
    groupedMessage() {
      const cache = {};
      return this.messages.reduce((accumulator, currentValue) => {
        const date = moment(currentValue.date);
        const start = date.startOf("day");
        if (cache[start] !== undefined) {
          const index = cache[start];
          accumulator[index].messages.push(currentValue);
        } else {
          accumulator.push({
            date: date.startOf("day"),
            messages: [currentValue],
          });
          cache[start] = accumulator.length - 1;
        }
        return accumulator;
      }, []);
    },
  },
  methods: {
    send() {
      this.$forceUpdate();
    },
    displayActions(obj, index) {
      if (index == this.length - 1 && obj.actions) {
        return true;
      }
      return false;
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.container.scroll({
          top: 9999999,
          left: 0,
          behavior: "smooth",
        });
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../theme/scss/variables.scss";
@import "../../../theme/scss/mixins.scss";

.conversation-wrap {
  .user-message {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 $space-smaller $space-micro auto;
    max-width: 85%;
    text-align: right;

    .message-wrap {
      margin-right: $space-small;
    }

    .in-progress {
      opacity: 0.6;
    }
  }

  .has-attachment {
    padding: 0;
    overflow: hidden;
  }

  .user.has-attachment {
    .icon-wrap {
      color: $color-white;
    }

    .download {
      color: $color-white;
    }
  }

  .user-message-wrap {
    + .user-message-wrap {
      margin-top: $space-micro;

      .user-message .chat-bubble {
        border-top-right-radius: $space-smaller;
      }
    }

    + .agent-message-wrap {
      margin-top: $space-normal;
    }
  }
}

.conversation-wrap {
  .agent-message {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 0 $space-micro $space-small;
    max-width: 88%;

    .avatar-wrap {
      height: $space-medium;
      width: $space-medium;
      flex-shrink: 0;

      .user-thumbnail-box {
        margin-top: -$space-large;
      }
    }

    .message-wrap {
      flex-grow: 1;
      flex-shrink: 0;
      margin-left: $space-small;
      max-width: 90%;
    }
  }

  .agent-name {
    color: $color-body;
    font-size: $font-size-small;
    font-weight: $font-weight-medium;
    margin: $space-small 0;
    padding-left: $space-micro;
  }

  .has-attachment {
    padding: 0;
    overflow: hidden;
  }

  .agent-message-wrap {
    + .agent-message-wrap {
      margin-top: $space-micro;

      .agent-message .chat-bubble {
        border-top-left-radius: $space-smaller;
      }
    }

    + .user-message-wrap {
      margin-top: $space-normal;
    }

    &.has-response + .user-message-wrap {
      margin-top: $space-micro;
      .chat-bubble {
        border-top-right-radius: $space-smaller;
      }
    }
  }
}

.conversation--container {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  font-family: $font-family;
}

.message--loader {
  text-align: center;
}

.conversation-wrap.is-typing .messages-wrap div:last-child {
  .agent-message {
    .agent-name {
      display: none;
    }
    .user-thumbnail-box {
      margin-top: 0;
    }
  }
}
</style>

<style src="../../../node_modules/perfect-scrollbar/css/perfect-scrollbar.css"></style>