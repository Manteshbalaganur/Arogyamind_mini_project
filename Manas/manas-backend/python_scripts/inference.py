# This is your EXACT original inference.py file
from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate
import sys
import json
import os 
class Chatbot:
    def __init__(self):
        self.llm = self.initialize_llm()
        self.keywords = ["death", "murder", "suicide", "harm", "kill"]

    def initialize_llm(self):
        return ChatGroq(
            temperature=0,
            # groq_api_key="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",
            # import os
            api_key = os.getenv('GROQ_API_KEY'),  # Get from environment variable
            model_name="llama-3.3-70b-versatile"
        )

    def process_query(self, query):
        # Check for sensitive keywords
        alert_message = None
        if any(keyword in query.lower() for keyword in self.keywords):
            alert_message = "It seems you mentioned something serious. Please remember to take care of your mental health."

        # Define prompt template for compassionate responses
        prompt_template = """You are a compassionate mental health chatbot. Respond thoughtfully to the following user query:
        User: {question}
        Chatbot: """
        prompt = PromptTemplate(template=prompt_template, input_variables=['question'])

        # Create a chain to process the query
        chain = prompt | self.llm
        response = chain.invoke({"question": query}).content

        return {"response": response, "alert": alert_message}

if __name__ == "__main__":
    # Read input from Node.js
    input_data = json.loads(sys.argv[1])
    message = input_data.get('message', '')
    timestamp = input_data.get('timestamp', '')
    
    chatbot = Chatbot()
    result = chatbot.process_query(message)
    
    # Output result for Node.js to read
    print(json.dumps(result))