# inference.py - Updated to use environment variable
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
import sys
import json
import os

class Chatbot:
    def __init__(self):
        self.llm = self.initialize_llm()
        self.keywords = ["death", "murder", "suicide", "harm", "kill", "hurt myself", "end my life"]

    def initialize_llm(self):
        # Get API key from environment variable (more secure)
        groq_api_key = os.getenv('GROQ_API_KEY')
        
        if not groq_api_key:
            raise ValueError("GROQ_API_KEY environment variable is not set")
            
        return ChatGroq(
            temperature=0.7,  # Slightly higher for more natural responses
            groq_api_key=groq_api_key,
            model_name="llama-3.3-70b-versatile"
        )

    def process_query(self, query):
        # Check for sensitive keywords
        alert_message = None
        query_lower = query.lower()
        
        urgent_keywords = ["suicide", "kill myself", "end my life", "want to die", "harm myself"]
        if any(keyword in query_lower for keyword in urgent_keywords):
            alert_message = "I'm really concerned about what you're sharing. Please reach out to a mental health professional immediately. You can contact a crisis helpline - they're available 24/7. In India: Vandrevala Foundation at 1860-2662-345 or 1-800-2333-330."

        # Enhanced prompt for mental health support
        prompt_template = """You are a compassionate, empathetic mental health support assistant called Manas. Your role is to provide emotional support, active listening, and gentle guidance.

User message: {question}

Please respond with:
- Warm, empathetic tone
- Validation of their feelings
- Open-ended questions to encourage sharing
- Mental health resources when appropriate
- No medical diagnoses or replacement for professional help

Response: """
        
        prompt = PromptTemplate(template=prompt_template, input_variables=['question'])
        chain = prompt | self.llm
        response = chain.invoke({"question": query}).content

        return {"response": response, "alert": alert_message}

if __name__ == "__main__":
    try:
        # Read input from Node.js
        input_data = json.loads(sys.argv[1])
        message = input_data.get('message', '')
        timestamp = input_data.get('timestamp', '')
        
        chatbot = Chatbot()
        result = chatbot.process_query(message)
        
        # Output result for Node.js to read
        print(json.dumps(result))
        
    except Exception as e:
        # Return error response that Node.js can handle
        error_response = {
            "response": "I'm having some technical difficulties right now, but I'm here for you. Please try again in a moment.",
            "alert": False
        }
        print(json.dumps(error_response))
# # This is your EXACT original inference.py file
# from langchain_groq import ChatGroq
# # from langchain.prompts import PromptTemplate
# from langchain_core.prompts import PromptTemplate  # ✅ CORRECT
# import sys
# import json
# import os 
# class Chatbot:
#     def __init__(self):
#         self.llm = self.initialize_llm()
#         self.keywords = ["death", "murder", "suicide", "harm", "kill"]

#     def initialize_llm(self):
#         return ChatGroq(
#             temperature=0,
#             groq_api_key="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",
#             # import os
#             # api_key = os.getenv('GROQ_API_KEY'),  # Get from environment variable
#             model_name="llama-3.3-70b-versatile"
#         )

#     def process_query(self, query):
#         # Check for sensitive keywords
#         alert_message = None
#         if any(keyword in query.lower() for keyword in self.keywords):
#             alert_message = "It seems you mentioned something serious. Please remember to take care of your mental health."

#         # Define prompt template for compassionate responses
#         prompt_template = """You are a compassionate mental health chatbot. Respond thoughtfully to the following user query:
#         User: {question}
#         Chatbot: """
#         prompt = PromptTemplate(template=prompt_template, input_variables=['question'])

#         # Create a chain to process the query
#         chain = prompt | self.llm
#         response = chain.invoke({"question": query}).content

#         return {"response": response, "alert": alert_message}

# if __name__ == "__main__":
#     # Read input from Node.js
#     input_data = json.loads(sys.argv[1])
#     message = input_data.get('message', '')
#     timestamp = input_data.get('timestamp', '')
    
#     chatbot = Chatbot()
#     result = chatbot.process_query(message)
    
#     # Output result for Node.js to read
#     print(json.dumps(result))