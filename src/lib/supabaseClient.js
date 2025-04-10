import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://iffwzmwntommyvecphnx.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZnd6bXdudG9tbXl2ZWNwaG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNzExODUsImV4cCI6MjA1OTc0NzE4NX0.ljPunpXvAqF7u6ytqCOM_wtwxWWByZuv43IGDGdR1vQ'
);
