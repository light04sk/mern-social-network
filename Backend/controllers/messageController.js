import Message from "../models/message.js";
import Conversation from "../models/conversation.js";

export const sendMessage = async (req, res) => {
  try {
    const { conversation, message, picture } = req.body;

    // 1. Create and save the new message
    const newMessage = new Message({
      sender: req.user._id,
      conversation,
      message,
      picture,
    });
    await newMessage.save();

    // 2. Update conversation with latest message
    const convo = await Conversation.findById(conversation);
    if (convo) {
      convo.lastMessage = newMessage._id;
      await convo.save();
    }

    // 3. Populate sender details for frontend
    const populatedMessage = await newMessage.populate("sender");

    // 4. Return response
    return res.status(200).json({
      message: "Message sent successfully",
      data: populatedMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { convoId } = req.params;
    const messages = await Message.find({ conversation: convoId })
      .populate("sender")
      .sort({ createdAt: 1 });

    return res
      .status(200)
      .json({ message: "Fetched Message Successfully", message });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error", message: error.message });
  }
};
